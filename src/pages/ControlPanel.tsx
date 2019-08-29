import * as React from "react";

export interface ControlPanelProps {}

export interface ControlPanelState {}

class ControlPanel extends React.Component<
  ControlPanelProps,
  ControlPanelState
> {
  render() {
    return (
      <div className="content-container">
        <form id="add-form">
          <h3 className="title">Agregar Modelo</h3>
          <div id="form-model">
            <label htmlFor="obj-file" className="input-file-label">
              Subir archivo .obj
              <input className="input-file" id="obj-file" type="file" />
            </label>
            <label htmlFor="mtl-file" className="input-file-label">
              Subir archivo .mtl
              <input className="input-file" id="mtl-file" type="file" />
            </label>
          </div>
          <div id="form-info">
            <label className="input-text-label">
              Código:
              <input type="text" className="input-text" />
            </label>
            <label className="input-text-label">
              Categoría:
              <input type="text" className="input-text" />
            </label>
            <label className="input-text-label">
              Medidas:
              <input type="text" className="input-text" />
            </label>
            <label className="input-text-label">
              Contenido:
              <input type="text" className="input-text" />
            </label>
            <label className="input-text-label">
              Cliente:
              <input type="text" className="input-text" />
            </label>
            <label className="input-text-label">
              Precio:
              <input type="text" className="input-text" />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default ControlPanel;
