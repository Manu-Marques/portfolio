import './styles.css';
import { useState, useEffect, useRef } from 'react';

export default function Experience() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/experiences')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    interface Experience {
        oclock: {
            title: string,
            company: string,
            city: string,
            description: string,
            description_1: string,
            description_2: string,
            description_3: string,
            start: string,
            end: string
        },
        bus: {
            title: string,
            company: string,
            city: string,
            description: string,
            description_1: string,
            description_2: string,
            description_3: string,
            start: string,
            end: string
        },
        hotel: {
            title: string,
            company: string,
            city: string,
            description: string,
            description_1: string,
            description_2: string,
            description_3: string,
            start: string,
            end: string
        },
        quick: {
            title: string,
            company: string,
            city: string,
            description: string,
            description_1: string,
            description_2: string,
            description_3: string,
            start: string,
            end: string
        }
    }

    const myRef = useRef(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            setVisible(entry.isIntersecting);
        });
        if (myRef.current) {
            observer.observe(myRef.current);
        }
    }, []);


    return (
        <div ref={myRef} className={`experience-main ${isVisible ? 'active' : ''}`} id="experience">
            <h1 className='experience-title'>Expériences</h1>
            <div className="experience-table">
                {data.map((info: Experience, i) => (
                    <div key={i} className="experience-container">
                        <div className="experience-left">
                            <><div className='experience-oclock'>
                                <h1 className='experience-subtitle'>{info.oclock.title}</h1>
                                <h1 className='experience-oclock-subtitle'>{info.oclock.company} - {info.oclock.city}</h1>
                                <ul className='experience-oclock-list'>
                                    <li className='experience-item'>{info.oclock.description}</li>
                                    <li className='experience-item'>{info.oclock.description_1}</li>
                                    <li className='experience-item'>{info.oclock.description_2}</li>
                                    <li className='experience-item'>{info.oclock.description_3}</li>
                                </ul>
                                <div className="experience-row">
                                    <p className='experience-year'>{info.oclock.start} à {info.oclock.end}</p>
                                </div>
                            </div><div className="experience-stavo">
                                    <h1 className='experience-subtitle'>{info.bus.title}</h1>
                                    <h1 className='experience-stavo-subtitle'>{info.bus.company} - {info.bus.city}</h1>
                                    <ul className='experience-stavo-list'>
                                        <li className='experience-item'>{info.bus.description}</li>
                                        <li className='experience-item'>{info.bus.description_1}</li>
                                        <li className='experience-item'>{info.bus.description_2}</li>
                                        <li className='experience-item'>{info.bus.description_3}</li>
                                    </ul>
                                    <div className="experience-row">
                                        <p className='experience-year'>{info.bus.start} à {info.bus.end}</p>
                                    </div>
                                </div></>
                        </div>
                        <div className="experience-right">
                            <div className="experience-hotel">
                                <h1 className='experience-subtitle'>{info.hotel.title}</h1>
                                <h1 className='experience-hotel-subtitle'>{info.hotel.company} - {info.hotel.city}</h1>
                                <ul className='experience-hotel-list'>
                                    <li className='experience-item'>{info.hotel.description}</li>
                                    <li className='experience-item'>{info.hotel.description_1}</li>
                                    <li className='experience-item'>{info.hotel.description_2}</li>
                                    <li className='experience-item'>{info.hotel.description_3}</li>
                                </ul>
                                <div className="experience-row">
                                    <p className='experience-year'>{info.hotel.start} à {info.hotel.end}</p>
                                </div>
                            </div>
                            <div className="experience-restaurant">
                                <h1 className='experience-subtitle'>{info.quick.title}</h1>
                                <h1 className='experience-restaurant-subtitle'>{info.quick.company} - {info.quick.city}</h1>
                                <ul className='experience-restaurant-list'>
                                    <li className='experience-item'>{info.quick.description}</li>
                                    <li className='experience-item'>{info.quick.description_1}</li>
                                    <li className='experience-item'>{info.quick.description_2}</li>
                                    <li className='experience-item'>{info.quick.description_3}</li>
                                </ul>
                                <div className="experience-row">
                                    <p className='experience-year'>{info.quick.start} à {info.quick.end} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}