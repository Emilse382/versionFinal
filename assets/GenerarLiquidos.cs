using UnityEngine;
using System.Collections;

public class GenerarLiquidos : MonoBehaviour {

	public GameObject gaseosa;
	public GameObject suero;
	public GameObject agua;
	public GameObject bebida;



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
			Instantiate (gaseosa, new Vector3(Random.Range(-12,11),4), new Quaternion());
			Instantiate (suero, new Vector3(Random.Range(-11,10),4), new Quaternion());
			Instantiate (agua, new Vector3(Random.Range(-13,12),4), new Quaternion());
			Instantiate (bebida, new Vector3(Random.Range(-10,9),4), new Quaternion());

			yield return new WaitForSeconds (65*Time.deltaTime);
		}
	}
}
