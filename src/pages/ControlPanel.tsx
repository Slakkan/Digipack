import * as React from "react";

import { cloud, database } from "../database/firebase";

export interface ControlPanelProps {}

export interface ControlPanelState {
  codigo: string | undefined;
  categoria: string | undefined;
  medidas: string | undefined;
  contenido: string | undefined;
  cliente: string | undefined;
  precio: string | undefined;
  model: File | null;
  texture: File | null;
}

class ControlPanel extends React.Component<ControlPanelProps, ControlPanelState> {
  state: ControlPanelState = {
    codigo: undefined,
    categoria: undefined,
    medidas: undefined,
    contenido: undefined,
    cliente: undefined,
    precio: undefined,
    model: null,
    texture: null
  };
  handleInput(input: HTMLInputElement) {
    if (input.id === "precio" && !input.value.match(/^\d{0,}(\.\d{0,2})?$/)) {
      input.value = this.state.precio ? this.state.precio : "";
      return;
    }
    this.setState({ ...this.state, [input.id]: input.value });
  }
  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { model, texture } = this.state;
    if (model === null || texture === null) {
      window.alert("Debes subir el modelo y las texturas antes de enviar el formulario");
      return;
    }
    const objRef = cloud.ref().child(`/3D/${this.state.codigo}.obj`);
    objRef.put(model);
    const mtlRef = cloud.ref().child(`/3D/${this.state.codigo}.mtl`);
    mtlRef.put(texture);

    const { codigo, categoria, medidas, contenido, cliente, precio } = this.state;
    if(!codigo) {
      window.alert('Debe ingresar un codigo')
      return
    }
    const key = codigo.replace('.', '@')
    database.ref(`productos/${key}`).set({
      categoria,
      medidas,
      contenido,
      cliente,
      precio
    });
  }
  handleOBJUpload(obj: File) {
    const splitName = obj.name.split(".");
    const extension = splitName[splitName.length - 1];
    if (extension === "obj") {
      this.setState({ model: obj });
    } else {
      window.alert("El formato del modelo 3D debe ser OBJ");
    }
  }
  handleMTLUpload(mtl: File) {
    const splitName = mtl.name.split(".");
    const extension = splitName[splitName.length - 1];
    if (extension === "mtl") {
      this.setState({ texture: mtl });
    } else {
      window.alert("El formato de las texturas debe ser MTL");
    }
  }

  render() {
    return (
      <div className="content-container">
        <form id="add-form" onSubmit={e => this.handleSubmit(e)}>
          <h3 className="title">Agregar Modelo</h3>
          <div id="form-model">
            <label htmlFor="obj-file" className="input-file-label">
              Subir archivo.obj
              <input
                className="input-file"
                id="obj-file"
                type="file"
                onChange={e => {
                  if (e.target.files !== null) {
                    this.handleOBJUpload(e.target.files[0]);
                  }
                }}
              />
            </label>
            <label htmlFor="mtl-file" className="input-file-label">
              Subir archivo.mtl
              <input
                className="input-file"
                id="mtl-file"
                type="file"
                onChange={e => {
                  if (e.target.files !== null) {
                    this.handleMTLUpload(e.target.files[0]);
                  }
                }}
              />
            </label>
          </div>
          <div id="form-info">
            <label className="input-text-label">
              Código:
              <input type="text" className="input-text" id="codigo" onChange={e => this.handleInput(e.target)} />
            </label>
            <label className="input-text-label">
              Categoría:
              <input type="text" className="input-text" id="categoria" onChange={e => this.handleInput(e.target)} />
            </label>
            <label className="input-text-label">
              Medidas:
              <input type="text" className="input-text" id="medidas" onChange={e => this.handleInput(e.target)} />
            </label>
            <label className="input-text-label">
              Contenido:
              <input type="text" className="input-text" id="contenido" onChange={e => this.handleInput(e.target)} />
            </label>
            <label className="input-text-label">
              Cliente:
              <input type="text" className="input-text" id="cliente" onChange={e => this.handleInput(e.target)} />
            </label>
            <label className="input-text-label">
              Precio:
              <input type="text" className="input-text" id="precio" onChange={e => this.handleInput(e.target)} />
            </label>
          </div>
          <button id="form-submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default ControlPanel;
