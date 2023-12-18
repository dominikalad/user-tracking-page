import React, { useEffect, useRef, useState, useCallback } from 'react';

import apiService from '../apiService';

import Paragraph from './Paragraph';
import Button from './Button';
import Header from './Header';
import texts from '../texts';
import '../styles/MainPage.css';


const MainPage = () => {
    let userId = sessionStorage.getItem('userId');
    const avatarRef = useRef(null);
    const [userAvatar, setUserAvatar] = useState(sessionStorage.getItem('userAvatar'));
    const [isScrollEventRecorded, setIsScrollEventRecorded] = useState(false);

    const handleScroll = useCallback(() => {
        const checkVisibility = () => {
            const { top, bottom } = avatarRef.current.getBoundingClientRect();
            return top < window.innerHeight && bottom >= 0;
        };

        const recordScroll = () => {
            apiService.recordScrollEvent({ userId })
                .then(() => console.log('Scroll recorded.'))
                .catch(console.error);
        };

        if (!isScrollEventRecorded && avatarRef.current && userId && checkVisibility()) {
            setIsScrollEventRecorded(true);
            recordScroll();
        }
    }, [isScrollEventRecorded, avatarRef, userId]);

    useEffect(() => {
        if (!userId) {
            apiService.fetchUserData()
                .then((userData) => {
                    setUserAvatar(userData.avatar);
                    sessionStorage.setItem('userId', userData.id);
                    sessionStorage.setItem('userAvatar', userData.avatar);
                    return apiService.storePageAccess({ userId: userData.id });
                })
                .catch(console.error);
        }
    }, [userId]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <>
            <Button page='/report' text={texts.mainPageBtn} />
            <Header text={texts.title} />
            <section className='main-page__article'>
                {texts.paragraphs.slice(0, 10).map((paragraph, index) => <Paragraph key={index} text={paragraph} />)}
                <img ref={avatarRef} className='main-page__avatar' src={userAvatar} alt="User Avatar" />
                {texts.paragraphs.slice(10).map((paragraph, index) => <Paragraph key={index + 10} text={paragraph} />)}
            </section>
        </>
    );
};

export default MainPage;
