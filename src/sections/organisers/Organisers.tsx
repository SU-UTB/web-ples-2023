import { getAnalytics, logEvent } from "firebase/analytics";
import { StyledImgWrapper } from "../../assets/images/StyledImg/StyledImg.styled";
import Headline from "../../components/headline/Headline";
import { WrapperSection } from "../../components/layout/wrapper/Wrapper.styled";
import { analyticsApp } from "../../tools/firebase";
import { organisers } from "./Organisers.content";
import { Link, OrganiserWrapper } from "./Organisers.styled";

const Organisers = () => {
  return (
    <WrapperSection centered>
      <Headline color="black">Organizátoří</Headline>
      <OrganiserWrapper>
        {organisers.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="reveal reveal-slow"
            onClick={() =>
              logEvent(getAnalytics(analyticsApp.app), "organiser_clicked", {
                name: item.name,
              })
            }
          >
            <StyledImgWrapper src={item.imgSrc} alt={item.name} />
          </Link>
        ))}
      </OrganiserWrapper>
    </WrapperSection>
  );
};

export default Organisers;
