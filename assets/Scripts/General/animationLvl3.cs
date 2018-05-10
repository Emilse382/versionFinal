using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class animationLvl3 : MonoBehaviour {
    public Material[] frames;
    public float fps=10;
    public int index = 0;



         
	// Use this for initialization
	void Start () {
        StartCoroutine("Esperar");
       

    }

    // Update is called once per frame
    void Update () {
        
       
	}

    IEnumerator Esperar() {

        yield return new WaitForSeconds(fps);
        transform.GetComponent<MeshRenderer>().material = frames[index];
        index++;
        fps = 0.13f;
        if (index < frames.Length)
        {
            StartCoroutine("Esperar");
        }
    }
}
