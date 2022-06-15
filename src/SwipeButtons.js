import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/icons/IconButton";

function SwipeButton() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon fontSize="large" />
      </IconButton>

      <IconButton>
        <CloseIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
