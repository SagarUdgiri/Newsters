import React from 'react'

   const NewsItem = (props) => {

      const newsitems = props.news.map( (newz,index) => {
        return (
              <div className="col my-3" key={index}>
                  <div className="card h-100 border border-warning shadow-0" style={{ borderRadius: "20px",backgroundColor:props.mode==='dark'?'gray':'white'}}>
                    <img src={ !newz.urlToImage
                              ? "https://www.investors.com/wp-content/uploads/2021/09/Stock-Apple-Changsha-company.jpg"
                              : newz.urlToImage
                            }
                          className="card-img-top img-fluid" alt={newz.title} style={{ borderRadius: "20px" }} />
                    <div className="card-body">
                        <h5 className="card-title" style={{color:props.mode==='dark'?'white':'black'}}>{newz.title} </h5>
                        <p>
                          <span className="badge rounded-pill bg-danger">
                            {newz.source.name}
                          </span>
                        </p>
                        <p className="card-text" style={{color:props.mode==='dark'?'white':'black'}}>{newz.description}</p>
                        <p className="card-text">
                          <small className={props.mode==='dark'?'':'text-muted'} style={{color:'gainsboro'}}>
                            By {!newz.author ? "unknown" : newz.author} on{" "}
                            {new Date(newz.publishedAt).toGMTString()}
                          </small>
                        </p>
                        <a href={newz.url} target="_blank" rel="noreferrer" className="btn btn-primary" > Read More </a>
                    </div>
                  </div>
              </div>
            );
            
        })
        
        return (
            <div className="card-group my-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {newsitems}
                </div>
            </div>
        )
    }


export default NewsItem
