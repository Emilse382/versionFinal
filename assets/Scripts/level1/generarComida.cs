using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class generarComida : MonoBehaviour {

	void OnMouseDown()
	{
		Debug.Log("MouseDown");
		Time.timeScale = 5f;
	
		//




	}

	// Use this for initialization
	public GameObject hamburguesa;
	public GameObject manzana;
	public GameObject perro;
	public GameObject zanahoria;



	// Use this for initialization
	void Start () {
		StartCoroutine (generator());
	}

	// Update is called once per frame
	void Update() {

	}

	IEnumerator generator()
	{
		while(true)
		{
			Instantiate (hamburguesa, new Vector3(Random.Range(-12,11),5), new Quaternion());
			Instantiate (manzana, new Vector3(Random.Range(-11,10),5), new Quaternion());
			Instantiate (perro, new Vector3(Random.Range(-13,12),5), new Quaternion());
			Instantiate (zanahoria, new Vector3(Random.Range(-13,12),5), new Quaternion());


			yield return new WaitForSeconds (5*Time.deltaTime);
		}
	}
}
