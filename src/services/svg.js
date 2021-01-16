const filter = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    data-supported-dps="16x16"
    fill="currentColor"
    width="16"
    height="16"
    focusable="false"
  >
    <path d="M15 2v2H6.72a2 2 0 01-3.44 0H1V2h2.28a2 2 0 013.44 0H15zm-4 4a2 2 0 00-1.72 1H1v2h8.28a2 2 0 003.45 0H15V7h-2.28A2 2 0 0011 6zm-6 5a2 2 0 00-1.72 1H1v2h2.28a2 2 0 003.45 0H15v-2H6.72A2 2 0 005 11z"></path>
  </svg>
);

const edit = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    data-supported-dps="24x24"
    fill="currentColor"
    className="mercado-match"
    width="24"
    height="24"
    focusable="false"
  >
    <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
  </svg>
);

const deleteIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    data-supported-dps="24x24"
    fill="currentColor"
    className="mercado-match"
    width="24"
    height="24"
    focusable="false"
  >
    <path d="M20 4v1H4V4a1 1 0 011-1h4a1 1 0 011-1h4a1 1 0 011 1h4a1 1 0 011 1zM5 6h14v13a3 3 0 01-3 3H8a3 3 0 01-3-3zm9 12h1V8h-1zm-5 0h1V8H9z"></path>
  </svg>
);

let svgs = {
  edit: edit,
  filter: filter,
  deleteIcon: deleteIcon,
};

export default svgs;
