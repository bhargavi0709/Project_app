import java.util.ArrayList;
import java.util.Scanner;

public class multiAL {
    public static void main(String[] args) {
        //declare an arryalist of arraylist
        Scanner sc= new Scanner(System.in);
        ArrayList<ArrayList<Integer>> listnew = new ArrayList<>();

        //initialisation
        for(int i=0;i< 3;i++){
            listnew.add(new ArrayList<>());
        }
//think what would happen if this for loop is not nested
        for(int m=0; m< 3; m++) {
            for (int n = 0; n < 4; n++) {
                listnew.get(m).add(sc.nextInt());
            }
        }
        System.out.println(listnew);
    }
}

