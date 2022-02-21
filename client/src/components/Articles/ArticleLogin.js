import React from 'react';
import {Link} from 'react-router-dom';

const ArticleLogin = () => {
    return (
        <article className="grid_8">
            <h3 className="p2">Login Form</h3>
            <form id="contact-form" action="#" method="post" enctype="multipart/form-data">
                <fieldset>
                    <label><span className="text-form">Username:</span>
                        <input name="p1" type="text" />
                    </label>
                    <label><span className="text-form">Password:</span>
                        <input name="p2" type="text" />
                    </label>
                    <div className="wrapper">
                        <div className="extra-wrap">
                            <div className="buttons"> <Link className="button" to="#">Login</Link> </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </article>
    )
}

export default ArticleLogin