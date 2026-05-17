import { useState } from "react";

import "./Portfolio.css";

import profiles from "./data";
import ProfileCard from "./ProfileCard";

function Portfolio() {

    const [darkMode, setDarkMode] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    const [likes, setLikes] = useState(
        profiles[0].likes
    );

    const currentProfile = profiles[currentIndex];

    const handleNext = () => {

        const nextIndex =
            (currentIndex + 1) % profiles.length;

        setCurrentIndex(nextIndex);

        setLikes(profiles[nextIndex].likes);
    };

    const handlePrev = () => {

        const prevIndex =
            (currentIndex - 1 + profiles.length) %
            profiles.length;

        setCurrentIndex(prevIndex);

        setLikes(profiles[prevIndex].likes);
    };

    return (

        <div className={`portfolio-container ${darkMode ? "dark-bg" : ""}`}>

            <div className="theme-toggle">

                <button
                    onClick={() =>
                        setDarkMode(!darkMode)
                    }
                >
                    Toggle Theme
                </button>

            </div>

            <ProfileCard
                profile={currentProfile}
                darkMode={darkMode}
                likes={likes}
                onLike={() => setLikes(likes + 1)}
                onNext={handleNext}
                onPrev={handlePrev}
            />

        </div>
    );
}

export default Portfolio;