import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
 import './progressbar.css';
class StepProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={this.props.step * 50}
        
      >
        <Step transition="scale">
          {({ accomplished }) => (
            // <img
            //   style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            //   width="30"
            //   src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
            // />
            <p class="s1">1</p>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            // <img
            //   style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            //   width="30"
            //   src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            // />
            <p class="s1">2</p>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            // <img
            //   style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            //   width="30"
            //   src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            // />
            <p class="s1">3</p>
          )}
        </Step>
      </ProgressBar>
    );
  }
}
export default StepProgressBar;