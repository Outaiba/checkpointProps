import React from "react";
import Test from "./Test";
import propTypes from "prop-types";

function Profile(props) {
  console.log(props);
  return (
    <div>
      {/*   <h1> {props.nom}</h1>
      <h1>{props.old}</h1> */}

      <h1>{props.fullName.name}</h1>
      <h1>{props.fullName.lastName}</h1>

      <h1>{props.bio}</h1>
      <h1>{props.profession}</h1>

      <button
        onClick={() => {
          props.handleName(props.fullName.name);
        }}
      >
        {" "}
        Click Here
      </button>
      {props.children}
    </div>
  );
}
Profile.defaultProps = {
  fullName: "This a default name",
  bio: "This a default bio",
  profession: "This is a default profession",
};
Profile.propTypes = {
  fullName: propTypes.string.isRequired,
  bio: propTypes.string.isRequired,
  profession: propTypes.string.isRequired,
  handleName: propTypes.func,
};
export default Profile;
