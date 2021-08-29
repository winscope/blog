import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('https://fkornel-winscope-blog-9jxr5ggcp9xj-4000.githubpreview.dev/posts', {
            title
        });

        setTitle('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
                </div>
                <button className="btn btn-primary">Submit </button>
            </form>
        </div>
    );
};

export default PostCreate;