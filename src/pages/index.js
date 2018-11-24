import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>

    <script type="text/javascript">
      // Set to false if opt-in required
      var trackByDefault = true;

function acEnableTracking() {
	var expiration = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
      document.cookie = "ac_enable_tracking=1; expires= " + expiration + "; path=/";
      acTrackVisit();
    }

function acTrackVisit() {
	var trackcmp_email = '';
      var trackcmp = document.createElement("script");
      trackcmp.async = true;
      trackcmp.type = 'text/javascript';
      trackcmp.src = '//trackcmp.net/visit?actid=89472534&e='+encodeURIComponent(trackcmp_email)+'&r='+encodeURIComponent(document.referrer)+'&u='+encodeURIComponent(window.location.href);
      var trackcmp_s = document.getElementsByTagName("script");
	if (trackcmp_s.length) {
        trackcmp_s[0].parentNode.appendChild(trackcmp);
      } else {
		var trackcmp_h = document.getElementsByTagName("head");
      trackcmp_h.length && trackcmp_h[0].appendChild(trackcmp);
    }
  }

if (trackByDefault || /(^|; )ac_enable_tracking=([^;]+)/.test(document.cookie)) {
        acEnableTracking();
      }
</script>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
