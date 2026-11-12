(() => {
  'use strict';

  if (location.protocol !== 'https:') return;
  const token = 'phc_zRJZ5SvArTjrYcxxgLg35xTBeTofkA6DnmJoE6SXfPQV';
  const apiHost = 'https://us.i.posthog.com';
  const pageviewProperties = {
    '$current_url': window.location.origin + window.location.pathname,
    '$pathname': window.location.pathname,
    '$host': window.location.hostname,
    '$referrer': (() => {
      try {
        const referrer = new URL(document.referrer);
        return referrer.origin + referrer.pathname;
      } catch {
        return '';
      }
    })()
  };

  if (window.posthog && window.posthog.__loaded) {
    window.posthog.capture('$pageview', pageviewProperties);
    return;
  }

  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split('.');2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement('script')).type='text/javascript',p.crossOrigin='anonymous',p.async=!0,p.src=s.api_host.replace('.i.posthog.com','-assets.i.posthog.com')+'/static/array.js',(r=t.getElementsByTagName('script')[0]).parentNode.insertBefore(p,r);var u=e;void 0!==a?u=e[a]=[]:a='posthog';u.people=u.people||[];u.toString=function(t){var e='posthog';return'posthog'!==a&&(e+='.'+a),t||(e+=' (stub)'),e};u.people.toString=function(){return u.toString(1)+'.people (stub)'};n='init capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags getGroups getSessionId getWindowId get_distinct_id captureException startSessionRecording stopSessionRecording sessionRecordingStarted get_property getSessionRecordingProperties'.split(' ');for(o=0;o<n.length;o++)g(u,n[o]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

  window.posthog.init(token, {
    api_host: apiHost,
    defaults: '2026-05-30',
    person_profiles: 'identified_only',
    capture_pageview: false,
    capture_pageleave: false,
    autocapture: false,
    capture_dead_clicks: false,
    capture_exceptions: false,
    capture_heatmaps: false,
    capture_performance: false,
    disable_session_recording: true,
    logs: { captureConsoleLogs: false }
  });

  // The preview should never send URL query strings to analytics.
  window.posthog.capture('$pageview', pageviewProperties);
})();
