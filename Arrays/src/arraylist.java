import java.util.*;
public class arraylist {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("erdtfyugiop");

        ArrayList<Integer> list1 = new ArrayList<>(10);

        list1.add(67);
        list1.add(90);
        list1.add(5678);
        System.out.println(list1);
        System.out.println(list1.contains(90));
        list1.set(0,999);
        System.out.println(list1);
        list1.remove(2) ;
        System.out.println(list1);

        ArrayList<ArrayList<Integer>> list2= new ArrayList<>();
        ArrayList<String> list3 = new ArrayList<>();
        list3.add(0, "heyy");
        System.out.println(list3);
        System.out.println(list3.size());

    }
}
