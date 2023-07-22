"use client"
import React, { useState, useEffect } from 'react';
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';

const TopicList = ({ topics }) => {
    return (
        <div>
            {topics.map((t) => (
                <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start" key={t._id}>
                    <div className="">
                        <h2 className='font-bold text-2xl'>{t.title}</h2>
                        <div>{t.description}</div>
                    </div>
                    <div className="flex gap-2">
                        <RemoveBtn id={t._id} />
                        <Link href={`/editTopic/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', { cache: 'no-store' });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.log("Error :", error);
        return { topics: [] };
    }
};

const TopicListWrapper = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTopics();
            setTopics(data.topics || []); // Make sure topics is set to an empty array if it is undefined
        };
        fetchData();
    }, []);

    return <TopicList topics={topics} />;
};

export default TopicListWrapper;
