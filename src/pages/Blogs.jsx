import React from 'react'
import '../assets/css/Blog.scss'
import { Link } from 'react-router-dom'

const Blogs = () => {
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
                  <input placeholder='Search...' type="text" name="" id="" />
                  <i class="fa-solid fa-magnifying-glass"></i>

                </div>
                <div className="ctg-lists">
                  <h5>Categories</h5>
                  <Link className='ctg-list'>Bathroom</Link>
                  <Link className='ctg-list'>Chair</Link>
                  <Link className='ctg-list'>Decor</Link>
                  <Link className='ctg-list'>Lamp</Link>
                  <Link className='ctg-list'>Table</Link>
                  <Link className='ctg-list'>Mirror</Link>


                </div>
                <div className="latest-post">
                  <h5>Latest Posts</h5>
                  <div className="post-card">
                    <img width={100} src="https://darion.wpbingosite.com/wp-content/uploads/2024/01/blog-1.jpg" alt="" />
                    <div className="post-card-text">
                      <span className='blog-date'>JAN 02, 2024</span>
                      <p>Revitalize Your Living Spaces: A Guide to Trends</p>
                    </div>
                  </div>

                  <div className="post-card">
                    <img width={100} src="https://darion.wpbingosite.com/wp-content/uploads/2024/01/blog-2.jpg" alt="" />
                    <div className="post-card-text">
                      <span className='blog-date'>JAN 02, 2024</span>
                      <p>Revitalize Your Living Spaces: A Guide to Trends</p>
                    </div>


                  </div>

                  <div className="post-card">
                    <img width={100} src="https://darion.wpbingosite.com/wp-content/uploads/2024/01/blog-3.jpg" alt="" />
                    <div className="post-card-text">
                      <span className='blog-date'>JAN 02, 2024</span>
                      <p>Revitalize Your Living Spaces: A Guide to Trends</p>
                    </div>


                  </div>
                </div>

                <div className="social-media">
                  <h5>Social</h5>
                  <div className="icons"><i className="fa-brands fa-instagram" /><i className="fa-brands fa-twitter" /><i className="fa-brands fa-facebook" /><i className="fa-brands fa-pinterest" /></div>                
                  </div>
                <div className="blog-tag">
                  <h5>Tags</h5>
                  <div className="row">
                    <div className="col-lg-4 blog-tag-button">
                      <button>Baber</button>

                    </div>

                    <div className="col-lg-4 blog-tag-button">
                      <button>Baby Needs</button>
                    </div>

                    <div className="col-lg-4 blog-tag-button">
                      <button>Beauty</button>
                    </div>

                    <div className="col-lg-4 blog-tag-button">
                      <button>Cosmetic</button>
                    </div>

                    <div className="col-lg-4 blog-tag-button">
                      <button>Ear Care</button>
                    </div>

                    <div className="col-lg-4 blog-tag-button">
                      <button>Electric</button>
                    </div>

                    <div className="col-lg-4 blog-tag-button">
                      <button>Fashion</button>
                    </div>

                    <div className="col-lg-4 blog-tag-button">
                      <button>Jewelery</button>
                    </div>

                    <div className="col-lg-4 blog-tag-button">
                      <button>Medical</button>
                    </div>
                    <div className="col-lg-4 blog-tag-button">
                      <button>Minimal</button>
                    </div>
                    <div className="col-lg-4 blog-tag-button">
                      <button>Organic</button>
                    </div>
                    <div className="col-lg-4 blog-tag-button">
                      <button>Simple</button>
                    </div>
                    <div className="col-lg-4 blog-tag-button">
                      <button>Sport</button>
                    </div>


                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="category-news">
                <div className="news-post">
                  <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/01/blog-1.jpg" alt="" />
                  <p className='post-date'>
                    March 22, 2024
                  </p>
                  <h2 className='post-title'>Revitalize Your Living Spaces: A Guide to Trends</h2>
                  <p className='post-detail'>
                    Tasty, softy chews to help promote good mobility and maintain joint health.Board Certified. Our goal has always been to...
                  </p>
                  <button className='post-detail-button'>Read More</button>

                </div>

                <div className="news-post">
                  <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/01/blog-2.jpg" alt="" />
                  <p className='post-date'>
                    March 22, 2024
                  </p>
                  <h2 className='post-title'>Revitalize Your Living Spaces: A Guide to Trends</h2>
                  <p className='post-detail'>
                    Tasty, softy chews to help promote good mobility and maintain joint health.Board Certified. Our goal has always been to...
                  </p>
                  <button className='post-detail-button'>Read More</button>

                </div>

                <div className="news-post">
                  <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/01/blog-3.jpg" alt="" />
                  <p className='post-date'>
                    March 22, 2024
                  </p>
                  <h2 className='post-title'>Revitalize Your Living Spaces: A Guide to Trends</h2>
                  <p className='post-detail'>
                    Tasty, softy chews to help promote good mobility and maintain joint health.Board Certified. Our goal has always been to...
                  </p>
                  <button className='post-detail-button'>Read More</button>

                </div>

                
                <div className="news-post">
                  <img src="https://darion.wpbingosite.com/wp-content/uploads/2024/01/blog-4.jpg" alt="" />
                  <p className='post-date'>
                    March 22, 2024
                  </p>
                  <h2 className='post-title'>Revitalize Your Living Spaces: A Guide to Trends</h2>
                  <p className='post-detail'>
                    Tasty, softy chews to help promote good mobility and maintain joint health.Board Certified. Our goal has always been to...
                  </p>
                  <button className='post-detail-button'>Read More</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs