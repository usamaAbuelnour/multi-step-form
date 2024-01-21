import classes from './PlanItem.module.scss';


const PlanItem = ({name, cost, icon}) => {
  return (
    <div className={classes.container}>
        <div className={classes.icon}>
            <img src={icon} alt="" />
        </div>
        <div className={classes.info}>
            <p className={classes.name}>{name}</p>
            <p className={classes.cost}>{`$${cost.price}/${cost.offer ? 'yr' : 'mo'}`}</p>
            <p className={classes.offer}>{cost.offer}</p>
        </div>
    </div>
  )
}

export default PlanItem