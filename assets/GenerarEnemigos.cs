using UnityEngine;
using System.Collections;

public class GenerarEnemigos : MonoBehaviour {
	public GameObject enemigo;
	public GameObject enemigo1;
	public GameObject enemigo2;



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
			Instantiate (enemigo, new Vector3(Random.Range(-12,11),5), new Quaternion());
			Instantiate (enemigo1, new Vector3(Random.Range(-11,10),5), new Quaternion());
			Instantiate (enemigo2, new Vector3(Random.Range(-13,12),5), new Quaternion());


			yield return new WaitForSeconds (40*Time.deltaTime);
		}
	}
}
