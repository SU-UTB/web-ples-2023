import Swal from 'sweetalert2';

export const showNotSelected = () => {
  Swal.fire({
    icon: 'warning',
    title: `Alespoň 1 místo musí být vybráno`,
    showConfirmButton: false,
    timer: 2000,
  });
};

export const showSomethingGoneWrong = (error: string) => {
  Swal.fire({
    icon: 'warning',
    title: `Chyba: ${error}`,
    showConfirmButton: false,
    timer: 2000,
  });
};
