public class findMin {
    public static void main(String[] args) {
    int[] arr={45,6,7,23,1,90,15,8,2};

    }
    static int findminimum(int[] arr){
        int st=arr[0];
        for(int i:arr){
            if(arr[i]<st)
                st=arr[i];
        }
    }
}
