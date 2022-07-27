import React from "react";
import { Link, useParams } from "react-router-dom";
import InfiniteCarousel from "react-leaf-carousel";

import styles from './GamePage.module.scss'

function GamePage() {
    const { slug } = useParams()
    const [games, setGames] = React.useState({})
    const [items, setItems] = React.useState([])
    React.useEffect(() => {

        fetch(`https://api.rawg.io/api/games/${slug}?key=214b1982462c4a9cb20cc992c0103699`)

            .then((res) => {
                return res.json();
            })
            .then((games) => {
                setGames(games)
            })
    }, [])
    React.useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=214b1982462c4a9cb20cc992c0103699')

            .then((res) => {
                return res.json();
            })
            .then((items) => {
                setItems(items.results)
            })
    }, [])

    return (

        <section className={styles.GamePage}>
            <div className='container' key={games.id}>
                <div className={styles.title}>{games.name}</div>
                <div className={styles.info}>
                    <div className={styles.date}>Date released: {games.released}</div>
                    <div className={styles.rating}>Rating: <span>{games.rating}</span></div>
                </div>
                <div className={styles.text}>
                    <div className={styles.image}>
                        <img src={games.background_image} alt="" />
                    </div>

                    <div className={styles.description} dangerouslySetInnerHTML={{
                        __html: games.description
                    }}>
                    </div>
                </div>
                <div className={styles.slider}>


                    <div>

                        <InfiniteCarousel
                            breakpoints={[
                                {
                                    breakpoint: 992,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                    },
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                    },
                                },
                            ]}
                            dots={true}
                            slidesToScroll={1}
                            slidesToShow={3}
                            scrollOnDevice={true}
                            slidesSpacing={30}
                            autoCycle={true}
                            cycleInterval={3000}
                            responsive={true}
                        >


                            { }
                        </InfiniteCarousel>
                    </div>
                </div>
                <div className={styles.textRaw} >
                    {games.description_raw}
                </div>
            </div>
            <div className="container">
                <div className={styles.buttons}>
                    <div className={styles.link}>
                        <button className={styles.button}><a href={games.website}>Go to <span>{games.name}</span> website</a></button>
                    </div>
                    <div className={styles.toHome}>
                        <button className={styles.button}><Link to="/">Go Home</Link></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GamePage