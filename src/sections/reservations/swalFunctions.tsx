import Swal from "sweetalert2";

export const showNotSelected = () => {
  Swal.fire({
    icon: "warning",
    title: `Alespoň 1 místo musí být vybráno`,
    showConfirmButton: false,
    timer: 2000,
  });
};

export const showSomethingGoneWrong = (error: string) => {
  Swal.fire({
    icon: "warning",
    title: `Chyba: ${error}`,
    showConfirmButton: false,
    timer: 2000,
  });
};

export const showSuccessReservation = () => {
  Swal.fire({
    icon: "success",
    title: `Rezervace byla vytvořena`,
    showConfirmButton: false,
    timer: 2000,
  });
};

export interface ReservedMakerResponse {
  makerName: string;
  time: string;
}

export const showReservedMakerResponse = (response: ReservedMakerResponse) => {
  Swal.fire({
    icon: "error",
    title: `Rezervace u vizážistky "${response.makerName}" na ${response.time} je již bohužel vytvořena, prosím zvolte jiný čas.`,
    showConfirmButton: true,
    timer: 2000,
  });
};
