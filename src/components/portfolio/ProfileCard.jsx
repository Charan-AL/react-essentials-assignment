import SkillBadge from "./SkillBadge";

function ProfileCard({profile,darkMode,likes,onLike,onNext,onPrev}) {

    return (
        <div className={`profile-card ${darkMode ? "dark" : ""}`}>
            <div className="profile-top">
                <img
                    src={profile.image}
                    alt={profile.name}
                    className="profile-image"
                />
                <div>
                    <h1>{profile.name}</h1>
                    <h3>{profile.title}</h3>
                </div>
            </div>
            <p className="profile-bio">{profile.bio}</p>
            <div className="skills-section">
                <h4>Skills</h4>
                <div className="skills-container">
                    {profile.skills.map((skill, index) => (
                        <SkillBadge
                            key={index}
                            skill={skill}
                        />
                    ))}
                </div>
            </div>
            <div className="profile-footer">
                <button onClick={onPrev}>◀</button>
                <button onClick={onNext}>▶</button>
                <button className="like-button" onClick={onLike}>❤️ {likes}</button>
                <button onClick={() =>alert(`Contacting ${profile.name}`)}>Contact</button>
            </div>

        </div>
    );
}

export default ProfileCard;