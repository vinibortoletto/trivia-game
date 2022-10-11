import React from 'react';
import { string, number } from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  render() {
    const { name, gravatarEmail, score } = this.props;
    const hash = md5(gravatarEmail).toString();
    const url = `https://www.gravatar.com/avatar/${hash}`;

    return (
      <div>
        <img src={ url } alt={ name } data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">{score}</p>
      </div>

    );
  }
}

Header.propTypes = {
  gravatarEmail: string.isRequired,
  name: string.isRequired,
  score: number.isRequired,
};

const mapStateToProps = (state) => ({
  gravatarEmail: state.player.gravatarEmail,
  name: state.player.name,
  profilePicture: state.player.profilePicture,
  score: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  callSaveProfilePicture: (picture) => dispatch(saveProfilePicture(picture)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
