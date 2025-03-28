import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../assets/css/BlogDetail.scss';
import axios from 'axios';
import Loader from '../Components/Preloader';

const BlogDetail = () => {
  const { urlid } = useParams();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    axios.get('https://mocki.io/v1/bc9b701e-8093-4f8c-91e1-7d40ef5728fc')
      .then(res => {
        setBlogData(res.data);
        setLoading(false);
        
        setComments([
          {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            message: 'Great article! Very informative.',
            date: '2023-05-15'
          },
          {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            message: 'Thanks for sharing these insights.',
            date: '2023-05-16'
          }
        ]);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.name || !newComment.message) return;
    
    const commentToAdd = {
      id: Date.now(), 
      ...newComment,
      date: new Date().toISOString().split('T')[0] 
    };
    
    setComments(prev => [...prev, commentToAdd]);
    setNewComment({
      name: '',
      email: '',
      message: ''
    });
  };

  const filteredPosts = blogData.filter(post => 
    post.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.titleAz.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    if (!dateString) return "JAN 02, 2024";
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
  };

  const formatCommentDate = (dateString) => {
    if (!dateString) return "Unknown date";
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) return <Loader />;
  if (!blogData.length) return <h2 className="text-center mt-5">No blogs available</h2>;

  const findBlog = blogData.find((p) => p.id === urlid);
  if (!findBlog) return <h2 className="text-center mt-5">Blog not found</h2>;

  return (
    <>
      <div className="about-photo">
        <img 
          style={{ width: "100%", objectFit: 'cover', height: '36vh' }} 
          src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/bg-breadcrumb.jpg" 
          alt="Background" 
        />
        <div className="about-text">
          <p><Link to='/' style={{ color: 'black', textDecoration: 'none' }}>home</Link> / <span>Blog</span></p>
          <h1>Blog</h1>
        </div>
      </div>

      <div className="blog-detailed-info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="blog-info-item">
                <h1 className='mb-4'>{findBlog.titleAz}</h1>
                <img 
                  style={{ width: "100%", height: "400px", objectFit: "cover" }} 
                  src={findBlog.image || "https://darion.wpbingosite.com/wp-content/uploads/2024/01/blog-1.jpg"} 
                  alt="Blog" 
                />
                {findBlog.date && <div className='date-item'>{formatDate(findBlog.date)}</div>}
                <div className="desc-item">
                  <h4 className='mt-2'>{findBlog.descEn}</h4>
                </div>
                <p className="blog-content">{findBlog.detailedDescEn || findBlog.descEn}</p>
              </div>

              {/* Comments Section */}
              <div className="comments-section mt-5">
                <h3>Comments ({comments.length})</h3>
                
                {comments.length > 0 ? (
                  <div className="comments-list mt-4">
                    {comments.map(comment => (
                      <div key={comment.id} className="comment-item mb-4">
                        <div className="comment-header d-flex align-items-center">
                          <div className="comment-avatar me-3">
                            <div  className="avatar-circle">
                              {comment.name.charAt(0).toUpperCase()}
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">{comment.name}</h5>
                            <small className="text-muted">{formatCommentDate(comment.date)}</small>
                          </div>
                        </div>
                        <div className="comment-body mt-3">
                          <p>{comment.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No comments yet. Be the first to comment!</p>
                )}

                <div className="comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <form onSubmit={handleSubmitComment}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          name="name"
                          value={newComment.name}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Your Name*"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="email"
                          name="email"
                          value={newComment.email}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <textarea
                        name="message"
                        value={newComment.message}
                        onChange={handleInputChange}
                        className="form-control"
                        rows="5"
                        placeholder="Your Comment*"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark">
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="category-list">
                <div className="blog-ctg-search">
                  <input 
                    placeholder='Search...' 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                
                <div className="ctg-lists">
                  <h5>Categories</h5>
                  {["Bathroom", "Chair", "Decor", "Lamp", "Table", "Mirror"].map(category => (
                    <Link 
                      key={category} 
                      className='ctg-list'
                      onClick={() => {
                        const categoryPost = blogData.find(post => 
                          post.titleEn.includes(category) || 
                          post.titleAz.includes(category)
                        );
                        if (categoryPost) navigate(`/blog/${categoryPost.id}`);
                      }}
                    >
                      {category}
                    </Link>
                  ))}
                </div>

                <div className="latest-post">
                  <h5>Latest Posts</h5>
                  {filteredPosts.slice(0, 3).map(post => (
                    <div 
                      key={post.id} 
                      className="post-card"
                      onClick={() => navigate(`/blog/${post.id}`)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img 
                        width={100} 
                        height={70}
                        style={{ objectFit: 'cover' }}
                        src={post.image} 
                        alt="Latest Post" 
                      />
                      <div className="post-card-text">
                        <span className='blog-date'>{formatDate(post.date)}</span>
                        <p>{post.titleEn}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="social-media">
                  <h5>Social</h5>
                  <div className="icons">
                    {["instagram", "twitter", "facebook", "pinterest"].map(icon => (
                      <a style={{color:"black"}}
                        key={icon} 
                        href={`https://${icon}.com`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className={`fa-brands fa-${icon}`} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="blog-tag">
                  <h5>Tags</h5>
                  <div className="row">
                    {["Barber", "Baby Needs", "Beauty", "Cosmetic", "Ear Care", "Electric", "Fashion", "Jewelry", "Medical", "Minimal", "Organic", "Simple", "Sport"].map(tag => (
                      <div 
                        className="col-lg-4 blog-tag-button" 
                        key={tag}
                        onClick={() => {
                          const tagPost = blogData.find(post => 
                            post.titleEn.includes(tag) || 
                            post.titleAz.includes(tag)
                          );
                          if (tagPost) navigate(`/blog/${tagPost.id}`);
                        }}
                      >
                        <button style={{ cursor: 'pointer' }}>{tag}</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;