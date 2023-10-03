import React from "react";

const AddPost = ({ post, handleChange, handleSubmit }) => {
  const { id, firstName, lastName, phone, category } = post;

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column w-50 justify-content-center"
      >
        <div>
          <label htmlFor="id" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            name="id"
            id="id"
            value={id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName" className="form-label">
            First-Name
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="form-label">
            Last-Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className="form-label">
            Number
          </label>
          <input
            type="text"
            className="form-control"
            name="phone"
            id="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            name="category"
            id="category"
            value={category}
            onChange={handleChange}
          />
        </div>
        <button type="btn submit btn-danger">Submit</button>
      </form>
    </div>
  );
};

export default AddPost;
