import React from 'react';
import '../styles/CommentsSection.css'; // Ensure this CSS file is updated for styling

const CommentsSection = () => {
    // Dummy comments data with names and logos
    const comments = [
        {
            name: "Alice",
            text: "Great app! Really helps me stay organized.",
            logo: "https://example.com/logo1.png"
        },
        {
            name: "Bob",
            text: "Amazing features and user-friendly interface.",
            logo: "https://example.com/logo2.png"
        },
        {
            name: "Charlie",
            text: "I love the new updates. Keep up the good work!",
            logo: "https://example.com/logo3.png"
        },
        {
            name: "Alice",
            text: "Great app! Really helps me stay organized.",
            logo: "https://example.com/logo1.png"
        },
        {
            name: "Alice",
            text: "Great app! Really helps me stay organized.",
            logo: "https://example.com/logo1.png"
        },
        {
            name: "Bob",
            text: "Amazing features and user-friendly interface.",
            logo: "https://example.com/logo2.png"
        },
        {
            name: "Charlie",
            text: "I love the new updates. Keep up the good work!",
            logo: "https://example.com/logo3.png"
        },
        {
            name: "Alice",
            text: "Great app! Really helps me stay organized.",
            logo: "https://example.com/logo1.png"
        },
        {
            name: "Alice",
            text: "Great app! Really helps me stay organized.",
            logo: "https://example.com/logo1.png"
        },
        {
            name: "Bob",
            text: "Amazing features and user-friendly interface.",
            logo: "https://example.com/logo2.png"
        },
        {
            name: "Charlie",
            text: "I love the new updates. Keep up the good work!",
            logo: "https://example.com/logo3.png"
        },
        {
            name: "Alice",
            text: "Great app! Really helps me stay organized.",
            logo: "https://example.com/logo1.png"
        },
        {
            name: "Alice",
            text: "Great app! Really helps me stay organized.",
            logo: "https://example.com/logo1.png"
        },
        {
            name: "Bob",
            text: "Amazing features and user-friendly interface.",
            logo: "https://example.com/logo2.png"
        },
        {
            name: "Charlie",
            text: "I love the new updates. Keep up the good work!",
            logo: "https://example.com/logo3.png"
        },
        {
            name: "Alice",
            text: "Great app! Really helps me stay organized.",
            logo: "https://example.com/logo1.png"
        },
        {
            name: "Bob",
            text: "Amazing features and user-friendly interface.",
            logo: "https://example.com/logo2.png"
        },
        {
            name: "Charlie",
            text: "I love the new updates. Keep up the good work!",
            logo: "https://example.com/logo3.png"
        },
        {
            name: "Alice",
            text: "Great app! Really helps me stay organized.",
            logo: "https://example.com/logo1.png"
        },
        {
            name: "Bob",
            text: "Amazing features and user-friendly interface.",
            logo: "https://example.com/logo2.png"
        },
        {
            name: "Charlie",
            text: "I love the new updates. Keep up the good work!",
            logo: "https://example.com/logo3.png"
        },
        {
            name: "Dana",
            text: "The customer support is fantastic. Highly recommend!",
            logo: "https://example.com/logo4.png"
        },
        {
            name: "Eve",
            text: "An essential tool for productivity. Five stars!",
            logo: "https://example.com/logo5.png"
        },
        // Add more comments as needed
    ];

    return (
        <>
        {/* <div classname="review">
            <h1> Reviews</h1>
            </div> */}
        
        <div className="comments-section">
            <div className="comments-container">
                <div className="comments-row">
                    {comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <img src={comment.logo} alt={`${comment.name}'s logo`} className="comment-logo" />
                            <div className="comment-text">
                                <strong>{comment.name}</strong>: {comment.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="comments-row">
                    {comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <img src={comment.logo} alt={`${comment.name}'s logo`} className="comment-logo" />
                            <div className="comment-text">
                                <strong>{comment.name}</strong>: {comment.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};


export default CommentsSection;
