import React, { useEffect, useState } from 'react';
import '../assets/css/Blog.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Loader from '../Components/Preloader';

const Blogs = () => {
  const { i18n } = useTranslation();
  const [blogData, setBlogData] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://mocki.io/v1/bc9b701e-8093-4f8c-91e1-7d40ef5728fc')
      .then(res => {
        setBlogData(res.data);
        setFilteredBlogs(res.data); 
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredBlogs(blogData);
    } else {
      const filtered = blogData.filter(item => 
        item.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.titleAz.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.descEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.descAz.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  }, [searchTerm, blogData]);

  if (loading) return <Loader />;

  const formatDate = (dateString) => {
    if (!dateString) return "JAN 02, 2024";
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
  };

  return (
    <>
      <div className="blog-photo">
        <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/03/bg-breadcrumb.jpg" alt="" />
        <div className="blog-text">
          <p><Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>/ <span>Blog </span></p>
          <h2>Blog</h2>
        </div>
      </div>

      <div className="blog-news">
        <div className="container-fluid">
          <div className="row">
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
                    <Link key={category} className='ctg-list'>{category}</Link>
                  ))}
                </div>
                <div className="latest-post">
                  <h5>Latest Posts</h5>
                  {blogData.slice(0, 3).map(post => (
                    <div className="post-card" key={post.id}>
                      <img width={100} src={post.image} alt="" />
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
                      <a 
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
                      <div className="col-lg-4 blog-tag-button" key={tag}>
                        <button>{tag}</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="category-news">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((item) => (
                    <div className="news-post" key={item.id}>
                      <img src={item.image} alt="" />
                      <p className='post-date'>{formatDate(item.date)}</p>
                      <h2 className='post-title m-0 mt-1 mb-2'>
                        {i18n.language === 'az' ? item.titleAz : item.titleEn}
                      </h2>
                      <p className='post-detail'>
                        {i18n.language === 'az' ? item.descAz : item.descEn}
                      </p>
                      <Link to={`/blog/${item.id}`} className='post-detail-button'>
                        Read More
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="no-results">
                    <h3>No blog posts found matching your search</h3>
                    <p>Try different keywords or browse our categories</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;