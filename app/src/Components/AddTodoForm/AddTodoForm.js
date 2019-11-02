import React from "react";

const AddTodoFrom = () => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">border_color</i>
            <input id="icon_prefix" type="text" className="validate" />
            <label for="icon_prefix">Your Todo Item</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodoFrom;
