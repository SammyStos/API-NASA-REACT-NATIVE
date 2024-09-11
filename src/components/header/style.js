const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'black',
  
    paddingBottom: 5,
    width: '100%',
  },
  navLeft: {
    flex: 1,
marginLeft:100,



  },
  navCenter: {
    flex: 2,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft:100
  
  },
  logo: {
    width: 75,
    height: 75,

  },
  navRight: {
    flex: 1,
    alignItems:"flex-end",
 justifyContent:"center",
 
  },
});

export default Header;