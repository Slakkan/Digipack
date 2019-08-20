import * as React from "react";
import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export interface ModelProps {
  className: string;
  object: string;
  material: string;
}

export default class Model extends React.Component<ModelProps> {
  controls: any;
  scene: THREE.Scene | undefined;
  camera: THREE.PerspectiveCamera | undefined;
  renderer: THREE.WebGLRenderer | undefined;
  requestID = 0;
  model: THREE.Object3D | undefined;
  el: HTMLElement | undefined |null;
  componentDidMount() {
    this.sceneSetup();
    this.loadAssets();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }
  sceneSetup = () => {
    if (!this.el) {
      return;
    }
    const size = this.el.clientWidth

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, // fov = field of view
      1, // aspect ratio
      1, // near plane
      2500 // far plane
    );

    this.camera.position.z = 1500;

    this.controls = new OrbitControls(this.camera, this.el);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(size, size);
    this.renderer.setClearColor(0xe3e3e3);
    this.renderer.domElement.className = this.props.className;
    this.el.appendChild(this.renderer.domElement);
  };

  loadAssets() {
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath("3D/");
    mtlLoader.load(this.props.material, (materials: any) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath("3D/");
      objLoader.load(
        this.props.object,
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

    this.model.rotateX(-Math.PI / 2);
    this.model.rotateZ(Math.PI / 4);

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
    if (!this.scene || !this.camera || !this.renderer || !this.el) {
      return;
    }

    const size = this.el.clientWidth

    this.renderer.setSize(size, size);

    this.camera.updateProjectionMatrix();
  };

  render() {
    return <div className="model-container" ref={ref => (this.el = ref)} />;
  }
}
