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

export const showAlreadyReservedError = (message: string) => {
  Swal.fire({
    icon: "error",
    title: message,
    showConfirmButton: true,
  });
}

export const showGdprModal = () => {
  Swal.fire({
    title: `Nařízení EU 2016/679 (GDPR)
    Obecné nařízení o ochraně osobních údajů.
    
    Vyplněním těchto osobních údajů "Jméno, Mobil, E-mail" při dokončení rezervace souhlasíte s uchováním těchto informací, které jsou také bezpodmínečně nutné pro správné dokončení zvolené rezervace.
    
    Zanechané osobní údaje nejsou sdělovány žádné třetí straně a výhradně slouží pro zvolený účel.
    
    Účel uchovaných dat:
    Identifikace v systému pro správné dokončení zvolené rezervace, zaslání emailu za účelem připomenutí objednávky, kontaktování SMS v případě nutnosti změny termínu, viditelnost historie rezervací, možnost zrušení rezervace, vedení historie návštěv.`,
    showConfirmButton: true,
  });
};
