import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import Layout from '../components/Layout';

interface WPPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <section className="py-12 px-6">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        {loading && <p>Loading posts...</p>}
        {!loading && posts.length === 0 && <p>No posts found.</p>}
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-law-blue p-6 rounded text-law-white">
              <h2
                className="text-2xl font-semibold mb-4"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
