import React from 'react';
import './Profile.js';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='#'>
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href='#'>
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href='#'>
                            <i className="bi bi-github"></i>
                        </a>
                        <a href='#'>
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
