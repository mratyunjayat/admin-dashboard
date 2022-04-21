import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widget = ({ type }) => {

  let data;

  //temporary
  const amount = 100
  const diff = 20

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",

        icon: (
          <PersonOutlineIcon className="icon" />
        )
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",

        icon: (
          <ShoppingCartOutlinedIcon className="icon" />
        )
      };
      break;

    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",

        icon: (
          <MonetizationOnOutlinedIcon className="icon" />
        )
      };
      break;

    case "balance":
      data = {
        title: "BALANCES",
        isMoney: true,
        link: "See Balance",

        icon: (
          <AccountBalanceOutlinedIcon className="icon" />
        )
      };
      break;

    default:
      break;
  }


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget