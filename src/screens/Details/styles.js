const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  backButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#4169E1',
    marginLeft: 30,
    marginHorizontal:-20
  },
  backButtonPressed: {
    backgroundColor: '#dd1717',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  date: {
    color: 'gray',
    fontSize: 16,
    marginBottom: 20,
  },
  explanation: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});