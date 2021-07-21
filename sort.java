class Sort {
     public static void main(String[] args) {
          int[] intArray = {67,45,3434,334,4565,565};
          int largest = intArray[0];
          for (int i = 0; i < intArray.length; i++) {
            if (largest < intArray[i])
                largest = intArray[i];
          }
          System.out.println("Largest:>" +largest);
     }
}