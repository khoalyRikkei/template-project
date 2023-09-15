const routeAccount = [
  {
    title: "account",
    path: "pages/user/account",
  },
  {
    title: "my course",
    path: "/pages/user/account/my-course",
  },
  {
    title: "payment",
    path: "/pages/user/account/payment",
  },
];
(() => {
  const ulElement = document.querySelector("#account-nav ul");
  const contentUl = routeAccount
    .map(
      (route) => `
        <li><a onclick="navigation('${route.path}')"> ${route.title}</a></li>
`
    )
    .join("");

  ulElement.innerHTML = contentUl;
})();
