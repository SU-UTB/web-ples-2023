import { ButtonReservation } from './Reservations.styled';

const GetSVG = () => {
  const assignIDs = () => {
    const places = ['S', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'S'];

    let stul = 1;
    let placesIndex = 0;

    const targetValue =
      'M367.07 309.89H332.93V293.29H367.07V309.89ZM333.93 308.89H366.07V294.29H333.93V308.89Z';

    const svgPaths = Array.from(document.querySelectorAll('path'));
    const clearPaths = svgPaths.splice(61, svgPaths.length);
    console.log(clearPaths);

    // for (let i = 1; i < clearPaths.length; i++) {
    //   const itemID = `${stul}/${places[placesIndex]}`;
    //   clearPaths[i].setAttribute('id', itemID);
    //   placesIndex++;

    //   if (placesIndex === places.length) {
    //     placesIndex = 0;
    //     stul++;
    //   }
    // }

    // const svgPathsUpdated = document.querySelectorAll('path');
    // console.log(svgPathsUpdated);

    // const svgPathsArray = Array.from(svgPathsUpdated);
    // const index = svgPathsArray.findIndex(
    //   (path) => path.getAttribute('d') === targetValue
    // );
    // console.log(index);
    // console.log(svgPathsUpdated[index].getAttribute('d'));

    // let finalData = '';
    // clearPaths.forEach((path) => {
    //   finalData += `<path d='${path.getAttribute(
    //     'd'
    //   )}' fill='${path.getAttribute('fill')}' id='${path.getAttribute(
    //     'id'
    //   )}' />`;
    // });

    // const svgUpdated = Array.from(document.querySelectorAll('path'));
    // const svgUpdatedClear = svgUpdated.splice(61, svgUpdated.length);
    // console.log(svgUpdatedClear);
    // let finalData = '';

    // svgUpdatedClear.forEach((path) => {
    //   finalData += `<path d='${path.getAttribute(
    //     'd'
    //   )}' fill='${path.getAttribute('fill')}' id='${path.getAttribute(
    //     'id'
    //   )}' />`;
    // });

    // console.log(finalData);
  };

  return (
    <ButtonReservation onClick={() => assignIDs()}>GetSVG</ButtonReservation>
  );
};

export default GetSVG;
