import { useState } from "react";

export default function Commentsform({ addNewComment }) {
  // State to store form data
  let [formdata, setformdata] = useState({
    username: "",
    remarks: "",
    rating: "5", // Default rating is 5
  });

  // Handle input changes for all form fields
  let handleInputChange = (event) => {
    setformdata((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  // Handle form submission
  let handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    // Check if all fields are filled
    if (formdata.username && formdata.remarks && formdata.rating) {
      // Add new comment
      addNewComment(formdata);
      
      // Reset the form after submission
      setformdata({
        username: "",
        remarks: "",
        rating: "5", // Reset to default rating
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={handleSubmit}>
        <hr />
        <label htmlFor="username">Username</label>
        <input
          placeholder="Username"
          type="text"
          value={formdata.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <hr />
        <label htmlFor="remarks">Remark</label>
        <textarea
          placeholder="Your comment"
          value={formdata.remarks}
          onChange={handleInputChange}
          id="remarks"
          name="remarks"
        />
        <hr />
        <label htmlFor="rating">Rating</label>
        <input
          placeholder="Rating"
          type="number"
          min={1}
          max={5}
          value={formdata.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <hr />
        <button type="submit">Add comment</button>
        <hr />
      </form>
    </div>
  );
}
