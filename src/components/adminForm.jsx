import React, { Component } from 'react'

class AdminForm extends Component {
  state = {}
  render() {
    let {
      changeHandler,
      name,
      description,
      url,
      sendProduct,
      imageHandler,
    } = this.props
    return (
      <div className="admin-form">
        <p>create products:</p>
        <img src={url} alt="there " />
        <form onSubmit={sendProduct}>
          <div className="form-group">
            <label htmlFor="productImage">image</label>
            <input
              type="file"
              className="form-control-file picture"
              id="productImage"
              onChange={imageHandler}
              accept="image/png, image/jpeg"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={name}
              onChange={changeHandler}
              placeholder="Enter name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Description:</label>
            <textarea
              className="form-control"
              id="productDescription"
              placeholder="Enter description"
              value={description}
              onChange={changeHandler}
              name="description"
              rows="3"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default AdminForm
