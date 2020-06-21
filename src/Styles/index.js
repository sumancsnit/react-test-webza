const styles = {
  Homepage: {
    display: 'flex',
  },
  MenuWrapper: {
    backgroundColor: '#1a1a1a',
    height: '100vh',
    color: '#fff',
  },
  listItem: {
    '&:hover': {
      backgroundColor: '#f48fb1',
    },
  },
  activeNav: {
    backgroundColor: '#f06292',
    '&:hover': {
      backgroundColor: '#f06292',
    },
  },
  listWrapper: {
    paddingTop: '0px',
  },
  listIconMenu: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  listIcon: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
  },
  listItemHead: {
    backgroundColor: '#2474a9',
  },
  listItemSubHead: {
    backgroundColor: '#151515',
  },
  // mainHeadText: {
  //   '& span': {
  //     fontSize: '1.1rem',
  //     fontWeight: 700,
  //   },
  // },
  listIconCollapse: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  tooltip: {
    padding: '4px',
    marginLeft: '12px',
    backgroundColor: '#f06292',
    fontSize: '12px',
  },
  menuText: {
    width: '212px',
    '& span': {
      fontSize: '1.1rem',
      fontWeight: 700,
    },
  },
  collapseText: {
    display: 'none',
  },
  content: {
    textAlign: 'initial',
    padding: '1rem',
    marginTop: '2rem',
    backgroundColor: '#eeeeee',
    margin: '1rem',
    borderRadius: '4px',
    marginBottom: '30%',
  },
  mainPageText: {
    paddingRight: '3rem',
  },
};

export default styles;
