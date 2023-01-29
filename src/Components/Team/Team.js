import React from "react";
import "./Team.css";
import zied from "../../Images/zied.png";
import najla from "../../Images/najla.png";
import salem from "../../Images/salem.png";
import yassine from "../../Images/yassine.png";
import amine from "../../Images/amine.png";

const Team = () => {
  return (
    <div id="team" className="dark">
      <h2>Team</h2>
      <p>Ou Team is creative , innovative and hardworking !</p>
      <div className="team">
        <div className="member">
          <img src={zied} alt="zied" />
          <h3 className="name">Zied Ben slimen</h3>
          <h3 className="role">Project manager</h3>
        </div>
        <div className="member">
          <img src={najla} alt="najla" />
          <h3 className="name">Najla Hamza</h3>
          <h3 className="role">Artist</h3>
        </div>
        <div className="member">
          <img src={salem} alt="salem" />
          <h3 className="name">Selem Menssi</h3>
          <h3 className="role">Developper</h3>
        </div>
        <div className="member">
          <img src={yassine} alt="yassine" />
          <h3 className="name">Yassine Jday</h3>
          <h3 className="role">Scriptwriter</h3>
        </div>
        <div className="member">
          <img src={amine} alt="amine" />
          <h3 className="name">Amine Angliz</h3>
          <h3 className="role">Co-Scriptwriter</h3>
        </div>
      </div>
    </div>
  );
};

export default Team;
