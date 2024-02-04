import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import style from './coast.module.scss'
import { getMovieDetailsCast } from '../../api/api';

const Cast = () => {
    const { movieid } = useParams();
    const [castInfo, setCastInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getMovieDetailsCast(movieid);
            console.log(res.id);
            setCastInfo(res);
        };
        fetchData().catch(error => console.log(error));
    }, [movieid]);

    return (
        <ul className={style.list}>
            {castInfo?.cast?.length > 0 ? (
                castInfo.cast.map(cast => (
                    <li key={cast.id} className={style.item}>
                        <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="cast ph" />
                        <div className={style.cast__name}>
                            <p>{cast.name}</p>
                            <p>{cast.character}</p>
                        </div>
                    </li>
                ))
            ) : (
                <p>No cast information available</p>
            )}
        </ul>
    );
}

export default Cast;
