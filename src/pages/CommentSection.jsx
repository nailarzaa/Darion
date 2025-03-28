import { useState } from "react";

const CommentSection = ({ blogId }) => {
  // State for comments and new comment form
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    text: ""
  });
  const [error, setError] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle comment submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!newComment.name || !newComment.text) {
      setError("Name and comment text are required");
      return;
    }

    // Create new comment object
    const comment = {
      id: Date.now(), // Simple unique ID
      blogId: blogId,
      author: newComment.name,
      email: newComment.email,
      text: newComment.text,
      date: new Date().toLocaleDateString()
    };

    // Add to comments list
    setComments([comment, ...comments]);
    
    // Reset form
    setNewComment({
      name: "",
      email: "",
      text: ""
    });
    setError("");
  };

  return (
    <div className="comment-section mt-8 p-4 border-t">
      <h3 className="text-xl font-bold mb-4">Comments ({comments.length})</h3>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newComment.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email (optional)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={newComment.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="text" className="block mb-1">Comment*</label>
          <textarea
            id="text"
            name="text"
            value={newComment.text}
            onChange={handleInputChange}
            rows="4"
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="comments-list space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="comment p-4 border rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold">{comment.author}</h4>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.text}</p>
              {comment.email && (
                <p className="text-sm text-gray-500 mt-1">Email: {comment.email}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;