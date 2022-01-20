import React, { Fragment } from "react";
import {
  GlobalStyles,
  StyledApp,
  StyledTeleprompter as Teleprompter,
  Controls,
  Buttons,
  Input,
  Button,
} from "../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import lyrics from "../store/lyrics";

const INITIAL_TEXT = `This is a test to see how things work. This should scroll as you approach the next word. If all goes well you can talk and it will move along.`;

export default function LyricsPage() {
  const [words, setWords] = React.useState(" ");
  const { lyrics } = useSelector((state) => state.lyrics);
  const handleInput = (e) => {
    setWords(e.target.value.split(" "));
  };
  const dispatch = useDispatch();

  const submitLyrics = () => {
    dispatch(lyrics(words));

    console.log(lyrics);
  };

  return (
    <Fragment>
      <StyledApp>
        <Controls>
          <Input onChange={handleInput} />
          <Buttons>
            <Button onClick={submitLyrics}>Next</Button>
          </Buttons>
        </Controls>
      </StyledApp>
    </Fragment>
  );
}
