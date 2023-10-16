
import java.util.ArrayList;
import java.util.List;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

public class disappearing {
    public List<Integer> disappearing(int[] nums){
         int i=0;
         while(i<nums.length){
            int correctIndex=nums[i];
            if(nums[i]<nums.length && nums[i]!= nums[correctIndex])
            {
                swap(nums,i,correctIndex);
            }
            else{
                i++;
            }
        }    
       
       List<Integer> ans=new ArrayList();
        for(int index=0;index<nums.length;index++){
            if(nums[index] != index+1){
               ans.add(index+1);     
        }
        }
        return ans;
        }
    
    
    static void swap(int[] nums,int i,int correctIndex){
        int temp=nums[i];
        nums[i]=nums[correctIndex];
        nums[correctIndex]=temp;
    }
}


        
