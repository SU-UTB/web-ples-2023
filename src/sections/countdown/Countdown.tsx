import * as React from "react";
import { Headline } from "../../components/headline/Headline";
import {
  CountdownItem,
  CountdownNumber,
  CountdownWrapper,
} from "./Countdown.styled";

interface CountdownProps {
  endTime: string;
}

interface CountdownState {
  timeLeft: number;
}

class Countdown extends React.Component<CountdownProps, CountdownState> {
  private timer: number | undefined;

  constructor(props: CountdownProps) {
    super(props);
    this.state = { timeLeft: this.getTimeLeft() };
  }

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ timeLeft: this.getTimeLeft() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getTimeLeft() {
    const endTime = new Date(this.props.endTime).getTime();
    const currentTime = new Date().getTime();
    return Math.max(endTime - currentTime, 0);
  }

  render() {
    const { timeLeft } = this.state;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
      <>
        <CountdownWrapper>
          <CountdownItem>
            <CountdownNumber>{days}</CountdownNumber>
            dní
          </CountdownItem>
          <CountdownItem>
            <CountdownNumber>{hours}</CountdownNumber>
            hodin
          </CountdownItem>
          <CountdownItem>
            <CountdownNumber>{minutes}</CountdownNumber>
            minut
          </CountdownItem>
        </CountdownWrapper>
      </>
    );
  }
}

export default Countdown;
