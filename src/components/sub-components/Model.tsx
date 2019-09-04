import * as React from "react";
import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export interface ModelProps {
  className: string;
  obj: string;
  mtl: string;
  medidas: string;
}

export default class Model extends React.Component<ModelProps> {
  scene: THREE.Scene | undefined;
  camera: THREE.PerspectiveCamera | undefined;
  renderer: THREE.WebGLRenderer | undefined;
  requestID = 0;
  model: THREE.Object3D | undefined;
  el: HTMLElement | undefined | null;
  controls: OrbitControls | undefined;
  canvas: HTMLCanvasElement | undefined;
  componentDidMount() {
    this.sceneSetup();
    this.loadAssets();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    if (this.controls) {
      this.controls.dispose();
    }
  }
  sceneSetup = () => {
    if (!this.el) {
      return;
    }

    const [largo, ancho, alto] = this.props.medidas.split("x");

    const maxDim = Math.max(parseInt(largo), parseInt(ancho), parseInt(alto));

    const size = this.el.clientWidth;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, // fov = field of view
      1, // aspect ratio
      1, // near plane
      maxDim * 30 // far plane
    );

    this.camera.position.x = -parseInt(ancho) * 2;
    this.camera.position.y = parseInt(alto) * 0.25;
    this.camera.position.z = parseInt(largo) * 2;


    this.controls = new OrbitControls(this.camera, this.el);
    this.controls.zoomSpeed = 0.5;
    this.controls.rotateSpeed = 0.5;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(size, size);
    this.renderer.setClearColor(0xcfb195);

    this.canvas = this.renderer.domElement;
    this.canvas.className = this.props.className;
    this.el.appendChild(this.canvas);
  };

  loadAssets() {
    const mtlLoader = new MTLLoader();
    mtlLoader.load(this.props.mtl, (materials: any) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        this.props.obj,
        (object: THREE.Object3D) => {
          object.position.y = 0;
          this.model = object;
          this.addCustomSceneObjects();
        },
        undefined,
        undefined
      );
    });
  }

  addCustomSceneObjects = () => {
    if (!this.scene || !this.model || !this.camera) {
      return;
    }

    this.scene.add(this.model);

    this.model.setRotationFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);

    this.model.rotateZ(Math.PI);
    this.model.rotateY(Math.PI);

    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 2000, 0);
    lights[1].position.set(3000, 2000, 3000);
    lights[2].position.set(-3000, -2000, -3000);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);

    this.startAnimationLoop();
  };

  startAnimationLoop = () => {
    if (!this.model || !this.scene || !this.camera || !this.renderer) {
      return;
    }

    this.renderer.render(this.scene, this.camera);

    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  handleWindowResize = () => {
    if (!this.scene || !this.camera || !this.renderer || !this.el || !this.canvas) {
      return;
    }

    this.canvas.style.display = "none";

    const size = this.el.clientWidth;

    this.renderer.setSize(size, size);

    this.camera.updateProjectionMatrix();

    this.canvas.style.display = "flex";
  };

  render() {
    return <div className="model-container" ref={ref => (this.el = ref)} />;
  }
}
